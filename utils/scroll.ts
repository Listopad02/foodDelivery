export default function scrollToElem(elem: string): void {
  const block: HTMLElement | null = document.querySelector(elem);
  block !== null ? block.scrollIntoView({ behavior: "smooth" }) : false;
}
