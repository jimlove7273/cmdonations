import React from 'react';
import { GrClose } from 'react-icons/gr';

const AddFriend = ({
  setAddFriendDialog,
}: {
  setAddFriendDialog: (value: boolean) => void;
}) => {
  const addFriendAction = () => {};
  return (
    <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black/50">
      <div className="z-10 m-2 p-5 w-full md:w-2/3 rounded-lg inline-block bg-white">
        <div className="flex justify-between mb-6">
          <div className="text-xl font-bold">Add a Friend</div>
          <div onClick={() => setAddFriendDialog(false)}>
            <GrClose />
          </div>
        </div>

        <div className="flex w-full gap-2 mb-2">
          <input
            type="text"
            name="first_name"
            className="w-full p-2 border border-gray-200"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last_name"
            className="w-full p-2 border border-gray-200"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="flex w-full gap-2 mb-2">
          <input
            type="text"
            name="address"
            className="w-full p-2 border border-gray-200"
            placeholder="Address"
          />
          <input
            type="text"
            name="email"
            className="w-full p-2 border border-gray-200"
            placeholder="email"
            required
          />
        </div>
        <div className="flex w-full gap-2 mb-2">
          <input
            type="text"
            name="city"
            className="w-full p-2 border border-gray-200"
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            className="w-full p-2 border border-gray-200"
            placeholder="State"
          />
          <input
            type="text"
            name="zipcode"
            className="w-full p-2 border border-gray-200"
            placeholder="Zip Code"
          />
          <input
            type="text"
            name="country"
            className="w-full p-2 border border-gray-200"
            placeholder="Country"
          />
        </div>
        <div className="flex w-full gap-2 mb-2">
          <div className="flex gap-2 items-center">
            DO NOT Send?
            <select name="DNS" className="p-2 border border-gray-200">
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
        </div>
        <div
          className="mt-5 flex justify-end border-t border-slate-200"
          onClick={addFriendAction}
        >
          <input
            type="submit"
            value="Save Changes"
            className="mt-4 px-4 py-2 bg-green-600 rounded-lg text-gray-50 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AddFriend;
