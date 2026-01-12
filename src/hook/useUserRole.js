import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useUserRole = (email) => {
  const encodedEmail = encodeURIComponent(email);

  const { data: userRole, isLoading } = useQuery({
    queryKey: ['userRole', email],
    queryFn: async () => {
      const response = await axios.get(
        `https://assinment12server.vercel.app/user/${encodedEmail}`
      );
      return response.data?.data?.role; // backend structure অনুযায়ী
    },
    enabled: !!email, // email না থাকলে request যাবে না
  });

  return [userRole, isLoading];
};

export default useUserRole;
