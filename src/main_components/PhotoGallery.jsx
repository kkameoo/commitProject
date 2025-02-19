import styled from "styled-components";

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  // padding: 20px;
`;

const Photo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  magin-top: 300px;
`;

function PhotoGallery() {
  return (
    <Gallery>
      <Photo src="/path-to-photo1.jpg" alt="결혼 사진 1" />
      <Photo src="/path-to-photo2.jpg" alt="결혼 사진 2" />
      <Photo src="/path-to-photo3.jpg" alt="결혼 사진 3" />
    </Gallery>
  );
}

export default PhotoGallery;