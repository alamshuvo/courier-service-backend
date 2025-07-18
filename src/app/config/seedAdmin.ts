import bcrypt from 'bcrypt';
import { userModel } from '../modules/auth/auth.model'; 
import config from '.';

export const seedAdmin = async () => {
  try {
    const adminExists = await userModel.findOne({ role: 'admin' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash(config.admin_password as string, 10); 

      await userModel.create({
        name: 'Super Admin',
        email: 'admin@gmail.com',
        password: hashedPassword,
        role: 'admin',
      });

      console.log('✅ Admin user seeded successfully');
    } else {
      console.log(' Admin user already exists');
    }
  } catch (error) {
    console.error(' Failed to seed admin user:', error);
  }
};
