declare module "tailwind-merge" {
  type ClassNameValue =
    | ClassNameArray
    | string
    | null
    | undefined
    | 0
    | 0n
    | false;
  type ClassNameArray = ClassNameValue[];

  /**
   * Merge Tailwind CSS class names, resolving conflicting utilities.
   */
  export function twMerge(...classLists: ClassNameValue[]): string;

  /**
   * Join class names without conflict resolution (clsx-style).
   */
  export function twJoin(...classLists: ClassNameValue[]): string;

  /**
   * Create a customized `twMerge` instance.
   */
  export function createTailwindMerge(
    ...args: unknown[]
  ): (...classLists: ClassNameValue[]) => string;

  /**
   * Extend the default Tailwind merge configuration.
   */
  export function extendTailwindMerge(
    ...args: unknown[]
  ): (...classLists: ClassNameValue[]) => string;

  export function fromTheme(...args: unknown[]): unknown;
  export function getDefaultConfig(...args: unknown[]): unknown;
  export function mergeConfigs(...args: unknown[]): unknown;

  export const validators: Record<string, (...args: unknown[]) => boolean>;

  export type ClassNameValueType = ClassNameValue;
}
