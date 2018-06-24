const users = [
  {
    name: "Tharles Amaro",
    email: "tharles@tharles.com"
  },
  {
    name: "Tharles Michaek",
    email: "tharles@tharlesmichael.com"
  }
]

export class User {
  static findAll(): Promise<any[]> {
    return Promise.resolve(users)
  }
}
