import { useSWRConfig } from 'swr';
import useSWRMutation from 'swr/mutation';
import { axiosInstance } from '@/libs/http/axios-instance';

export const useLogin = () => {
    const { mutate } = useSWRConfig();

    return useSWRMutation(
        '/auth/signin',
        (url, { arg }) => {
            return axiosInstance().post(url, arg);
        },
        {
            onSuccess: (data) => {
                const token = data?.accessToken?.token;

                if (token) {
                    localStorage.setItem('accessToken', token);

                    mutate('/me');
                }
            },
        },
    );
};
