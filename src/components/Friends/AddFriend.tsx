'use client';
import { FriendsType } from '@/types/friendsType';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { GrClose } from 'react-icons/gr';

const AddFriend = ({
  setAddFriendDialog,
}: {
  setAddFriendDialog: (value: boolean) => void;
}) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  /**
   *
   * Mutation Function - this uses Tanstack Query's useMutation to run the mutation function
   *
   */
  const { mutate: createFriend } = useMutation({
    mutationFn: (newData: FriendsType) => {
      return axios.post('/api/friends', newData);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push('/friends');
      router.refresh();
    },
  });

  const submit = async (data: any) => {
    console.log('Add Friend...', data);
    createFriend(data);
    setAddFriendDialog(false);
  };

  return (
    <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black/50">
      <div className="z-10 m-2 p-5 w-full md:w-2/3 rounded-lg inline-block bg-white">
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex justify-between mb-6">
            <div className="text-xl font-bold">Add a Friend</div>
            <div onClick={() => setAddFriendDialog(false)}>
              <GrClose />
            </div>
          </div>

          <div className="flex w-full gap-2 mb-2">
            <input
              type="text"
              {...register('firstName', { required: true, maxLength: 20 })}
              className="w-full p-2 border border-gray-200"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              {...register('lastName', { required: true, maxLength: 20 })}
              className="w-full p-2 border border-gray-200"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="flex w-full gap-2 mb-2">
            <input
              type="text"
              {...register('address')}
              className="w-full p-2 border border-gray-200"
              placeholder="Address"
            />
            <input
              type="text"
              {...register('email')}
              className="w-full p-2 border border-gray-200"
              placeholder="email"
            />
          </div>
          <div className="flex w-full gap-2 mb-2">
            <input
              type="text"
              {...register('city')}
              className="w-full p-2 border border-gray-200"
              placeholder="City"
            />
            <input
              type="text"
              {...register('state')}
              className="w-full p-2 border border-gray-200"
              placeholder="State"
            />
            <input
              type="text"
              {...register('zipCode')}
              className="w-full p-2 border border-gray-200"
              placeholder="Zip Code"
            />
            <input
              type="text"
              {...register('country')}
              className="w-full p-2 border border-gray-200"
              placeholder="Country"
            />
          </div>
          <div className="flex w-full gap-2 mb-2">
            <div className="flex gap-2 items-center">
              DO NOT Send?
              <select
                {...register('DNS')}
                className="p-2 border border-gray-200"
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex justify-end border-t border-slate-200">
            <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-gray-50 cursor-pointer">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFriend;
