/**
 * Lightweight class name combiner — concatenates truthy values with spaces.
 * Use instead of `clsx` to keep dependencies minimal.
 *
 * @example
 *   cn("base", isActive && "active", { "danger": hasError })
 */
export function cn(...args) {
  const classes = [];
  for (const arg of args) {
    if (!arg) continue;
    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      const inner = cn(...arg);
      if (inner) classes.push(inner);
    } else if (typeof arg === "object") {
      for (const [key, value] of Object.entries(arg)) {
        if (value) classes.push(key);
      }
    }
  }
  return classes.join(" ");
}
