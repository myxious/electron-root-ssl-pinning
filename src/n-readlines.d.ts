declare module "n-readlines" {
  interface ILineReader {
    next(): Buffer | false;
    reset(): void;
    close(): void;
  }
  export default class LineByLineReader implements ILineReader {
    public constructor(pathname: string);
    public next(): Buffer | false;
    public reset(): void;
    public close(): void;
  }
}
