export const validateFiles = (files) => {
  const allowedFileTypes = ['jpg', 'png', 'jpeg'];

  for (const file of files) {
    const fileExtension = file.name.split('.').at(-1).toLowerCase();

    if (!allowedFileTypes.includes(fileExtension)) {
      return false;
      //throw new  error
    }
  }

  return true;
};
