export class User {
  constructor(
    public name: string,
    public email: string,
    public image_url: string,
    public balance: number = 0,
    public provider: "google" = "google"
  ) {}
}
