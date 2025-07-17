import Jwt, { SignOptions } from 'jsonwebtoken';
export const createToken = (
  jwtPayload: Record<string, unknown>,
  secret: string,
  expiresIn: string,
) => {
  const options: SignOptions = { expiresIn: expiresIn as SignOptions['expiresIn'] };
  return Jwt.sign(jwtPayload, secret, options);
};
