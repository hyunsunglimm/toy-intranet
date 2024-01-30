export default function ImageUpload({ message, handleChange, file }) {
  return (
    <div>
      <p className="mb-2 text-gray-400">Image</p>
      <input
        className="hidden"
        id="input-userImg"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <label
        htmlFor="input-userImg"
        className="block w-[100px] h-[100px] border-2 hover:border-blue-300 rounded-full cursor-pointer mx-auto hover:bg-blue-50 transition"
      >
        {file && (
          <img
            className="w-[100px] h-[100px] rounded-full object-cover"
            src={URL.createObjectURL(file)}
            alt="local file"
          />
        )}
      </label>
      {message && (
        <p className="text-center mt-4 text-sm bg-red-200 p-1 text-red-400 rounded-lg">
          {message}
        </p>
      )}
    </div>
  );
}
