import DisplayWindow from "@/components/layout/displayWindow";
import TerminalPrompt from "@/components/terminalPrompt";

const Contact = () => {
  return (
    <DisplayWindow pageLocation="/contact">
    <article className="prose max-w-4xl">
      <TerminalPrompt command="finger robbarton" />
    </article>
  </DisplayWindow>
  )
}

export default Contact;
