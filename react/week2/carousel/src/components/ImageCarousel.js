import { useState, useEffect } from "react";

export default function ImageCarousel() {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1592683286596-c97aaba9f411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2lkdGh8fHx8fHwxNjM2MjkxMjY1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1633887996583-d7681d6dd4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjI5MTMxNw&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1634367070435-556d336dc61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjI4ODE0OA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1634946183772-11cf867897a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjI5MTM2OQ&ixlib=rb-1.2.1&q=80&w=1080",
  ]);
  const [imageIndex, setImageIndex] = useState(0);

  const onAddNewImage = () => {
    const imageUrl = prompt("Enter image URL");
    setImages((prev) => prev.concat([imageUrl]));
  };

  const onNextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const onPreviousImage = () => {
    if (imageIndex > 0) {
      setImageIndex((prev) => (prev - 1) % images.length);
    } else {
      setImageIndex(images.length - 1);
    }
  };

  const goToRandomImage = () => {
    const newImageIndex = Math.floor(Math.random() * images.length);
    setImageIndex(newImageIndex);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setImageIndex((prev) => (prev + 1) % images.length);
  //   }, 3000);
  // });

  return (
    <div>
      <ImageCarouselPreview
        images={images}
        imageIndex={imageIndex}
        onPreviousImage={onPreviousImage}
        onNextImage={onNextImage}
        goToRandomImage={goToRandomImage}
      />
      <hr />
      <ImageCarouselEdit
        images={images}
        onAddNewImage={onAddNewImage}
        onPreviousImage={onPreviousImage}
      />
    </div>
  );
}

function ImageCarouselPreview({
  images,
  imageIndex,
  onPreviousImage,
  onNextImage,
  goToRandomImage,
}) {
  return (
    <div>
      <div>
        <img src={images[imageIndex]} alt="" style={{ maxWidth: "500px" }} />
      </div>
      <p>
        This is Image {imageIndex + 1} out of {images.length}
      </p>
      <p>
        <button onClick={onPreviousImage}>Previous</button>
      </p>
      <p>
        <button onClick={onNextImage}>Next</button>
      </p>
      <p>
        <button onClick={goToRandomImage}>Random image</button>
      </p>
    </div>
  );
}

function ImageCarouselEdit({ images, onAddNewImage }) {
  return (
    <ul>
      {images.map((imageUrl, index) => (
        <li key={index}>{imageUrl}</li>
      ))}
      <li>
        <button onClick={onAddNewImage}>Add new image</button>
      </li>
    </ul>
  );
}
