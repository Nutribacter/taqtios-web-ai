"use client";

import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { CLINIC, BOOKING_MOTIVOS, BOOKING_HORARIOS } from "./content";

/**
 * "Reservá tu turno" — NO es un calendario real ni muestra disponibilidad
 * inventada. Junta motivo + preferencia de día/horario + datos de contacto
 * y arma un mensaje de WhatsApp: la solicitud la confirma la clínica por
 * ese canal, como pide el mega prompt (sección 25).
 */
const STEPS = ["Motivo", "Cuándo", "Tus datos"] as const;

function formatFecha(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export function OdontologiaBooking() {
  const [step, setStep] = useState(0);
  const [motivo, setMotivo] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const canNext = [Boolean(motivo), Boolean(horario), Boolean(nombre) && Boolean(telefono)];

  const mensaje = [
    "Hola, quisiera solicitar un turno.",
    "",
    `Nombre: ${nombre}`,
    `Motivo: ${motivo}`,
    fecha ? `Día preferido: ${formatFecha(fecha)}` : null,
    `Horario preferido: ${horario}`,
    "",
    "Quedo atento/a.",
  ]
    .filter((l) => l !== null)
    .join("\n");

  const waHref = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="odo-well mx-auto max-w-xl rounded-3xl p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition ${
                i < step
                  ? "bg-[#46615A] text-white"
                  : i === step
                    ? "bg-[#20221F] text-white"
                    : "bg-[rgba(40,40,35,0.08)] text-[#5C6159]"
              }`}
            >
              {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </div>
            <span className={`hidden text-xs font-medium sm:block ${i === step ? "text-[#20221F]" : "text-[#5C6159]"}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && <span className="h-px flex-1 bg-[rgba(40,40,35,0.1)]" />}
          </div>
        ))}
      </div>

      {step === 0 && (
        <fieldset>
          <legend className="text-sm font-medium text-[#20221F]">¿Qué necesitás?</legend>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {BOOKING_MOTIVOS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMotivo(m)}
                className={`rounded-xl border px-3 py-2.5 text-sm transition ${
                  motivo === m
                    ? "border-[#46615A] bg-[#DCE7E1] text-[#20221F]"
                    : "border-[rgba(40,40,35,0.1)] text-[#5C6159] hover:border-[rgba(40,40,35,0.2)]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label htmlFor="fecha" className="text-sm font-medium text-[#20221F]">
              ¿Cuándo preferís venir?
            </label>
            <input
              id="fecha"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="mt-2 h-11 w-full rounded-xl border border-[rgba(40,40,35,0.12)] bg-[#FAFAF7] px-3 text-sm outline-none transition focus:border-[#46615A]"
            />
            <p className="mt-1.5 text-xs text-[#5C6159]">Es una preferencia, no una reserva confirmada.</p>
          </div>
          <fieldset>
            <legend className="text-sm font-medium text-[#20221F]">Horario preferido</legend>
            <div className="mt-2 flex gap-2">
              {BOOKING_HORARIOS.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setHorario(h)}
                  className={`flex-1 rounded-xl border px-3 py-2.5 text-sm transition ${
                    horario === h
                      ? "border-[#46615A] bg-[#DCE7E1] text-[#20221F]"
                      : "border-[rgba(40,40,35,0.1)] text-[#5C6159] hover:border-[rgba(40,40,35,0.2)]"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="nombre" className="text-sm font-medium text-[#20221F]">Nombre</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Bryan Gómez"
              className="mt-2 h-11 w-full rounded-xl border border-[rgba(40,40,35,0.12)] bg-[#FAFAF7] px-3 text-sm outline-none transition focus:border-[#46615A]"
            />
          </div>
          <div>
            <label htmlFor="telefono" className="text-sm font-medium text-[#20221F]">WhatsApp</label>
            <input
              id="telefono"
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="351 000-0000"
              className="mt-2 h-11 w-full rounded-xl border border-[rgba(40,40,35,0.12)] bg-[#FAFAF7] px-3 text-sm outline-none transition focus:border-[#46615A]"
            />
          </div>
        </div>
      )}

      <div className="mt-7 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className={`text-sm font-medium text-[#5C6159] transition hover:text-[#20221F] ${step === 0 ? "invisible" : ""}`}
        >
          Atrás
        </button>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            disabled={!canNext[step]}
            onClick={() => setStep((s) => s + 1)}
            className="rounded-full bg-[#20221F] px-6 py-3 text-sm font-semibold text-[#F2F1EC] transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-30"
          >
            Siguiente
          </button>
        ) : (
          <a
            href={waHref}
            target="_blank"
            rel="noopener"
            aria-disabled={!canNext[2]}
            onClick={(e) => {
              if (!canNext[2]) e.preventDefault();
            }}
            className={`flex items-center gap-2 rounded-full bg-[#46615A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3a5049] ${
              !canNext[2] ? "pointer-events-none opacity-30" : ""
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Enviar por WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
