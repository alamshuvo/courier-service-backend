import bcrypt from 'bcrypt';
import { userModel } from '../modules/auth/auth.model'; // Adjust path based on your structure

export const seedAdmin = async () => {
  try {
    const adminExists = await userModel.findOne({ role: 'admin' });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 10); 

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
