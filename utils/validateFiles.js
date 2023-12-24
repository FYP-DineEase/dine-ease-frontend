export const validateFiles = (files) => {
  const allowedFileTypes = ['jpg', 'png', 'jpeg'];

  for (const file of files) {
    const fileExtension = file.name.split('.').at(-1).toLowerCase();
    const fileSize = Math.round(file.size / 1024);

    if (!allowedFileTypes.includes(fileExtension)) {
      throw new Error('Invalid File Extension!');
    } else if (fileSize > 1024) {
      throw new Error('Image Size should be less than 1MB!');
    }
  }
};
