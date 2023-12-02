import { hash, compare } from "bcryptjs";

// hash 會回傳一個Promise 所以這邊要設定他的回傳值是Promise<string>
export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password: string, hashPassword: string) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}
