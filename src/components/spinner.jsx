function Spinner() {
  return (
    /* From Uiverse.io by devAaus */
    <div class="flex-col gap-4 w-full flex items-center justify-center">
      <div class="w-20 h-20 border-4 border-transparent text-indigo-700 text-4xl animate-spin flex items-center justify-center border-t-indigo-600 rounded-full">
        <div class="w-16 h-16 border-4 border-transparent text-red-600 text-2xl animate-spin flex items-center justify-center border-t-red-600 rounded-full"></div>
      </div>
    </div>
  );
}

export default Spinner;
