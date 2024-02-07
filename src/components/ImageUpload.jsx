export default function ImageUpload({ message, handleChange, file }) {
  return (
    <div>
      <p className="mb-2 text-slate-300">Image</p>
      <input
        className="hidden"
        id="userImage-upload"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <label
        htmlFor="userImage-upload"
        className="block w-[100px] h-[100px] border-[1px] bg-white/0 border-slate-400/30 md:hover:border-slate-400/50 rounded-full cursor-pointer mx-auto md:hover:bg-white/10 transition"
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
