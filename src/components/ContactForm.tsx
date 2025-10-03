import React, { useState } from "react";
import { FORM_ENDPOINT } from "../config";

type FormState = { name: string; email: string; message: string; eventDate?: string };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    eventDate: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const payload = {
        name: form.name,
        email: form.email,
        message: form.message,
        eventDate: form.eventDate || undefined
      };

      // Formspree expects form data or JSON depending on setup — here we POST JSON.
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server responded with ${res.status}: ${text}`);
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", eventDate: "" });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Unknown error");
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Your name
        <input name="name" value={form.name} onChange={onChange} required />
      </label>

      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={onChange} required />
      </label>

      <label>
        Event date (optional)
        <input name="eventDate" type="date" value={form.eventDate} onChange={onChange} />
      </label>

      <label>
        Message
        <textarea name="message" value={form.message} onChange={onChange} required />
      </label>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "success" && <p className="ok">Thanks! We'll be in touch shortly.</p>}
      {status === "error" && <p className="error">Error: {errorMsg}</p>}
    </form>
  );
}
