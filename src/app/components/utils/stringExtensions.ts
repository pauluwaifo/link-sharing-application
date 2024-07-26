declare global {
  interface String {
    toCamelCase(): string;
  }
}

String.prototype.toCamelCase = function (): string {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export {};
