export class NotFoundError extends Error {
  constructor(resource: string, id: string) {
    super(`${resource} not found: ${id}`);
    this.name = "NotFoundError";
  }
}

export function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  if (
    typeof e === "object" &&
    e !== null &&
    "message" in e &&
    typeof e.message === "string"
  ) {
    return e.message;
  }
  return "Erro desconhecido";
}
