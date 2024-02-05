import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import Image from 'next/image';
import sample from '../../public/sampleImage.jpg';

const CategoryCard = () => {
  return (
    <>
      <div className="flex items-center justify-center"></div>
      <Card className="w-1/4 border border-black hover:shadow-lg bg-black">
        <CardContent>
          <Image src={sample} alt="" className="object-contain w-full " />
        </CardContent>
        {/* <CardTitle>Category</CardTitle> */}
        {/* <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          adipisci nostrum quis soluta. Dignissimos harum iusto necessitatibus
          suscipit quisquam ullam error enim libero voluptatibus ab eveniet vero
          sapiente perferendis excepturi mollitia, molestias animi earum! Ad
          consectetur cum fuga? Tenetur minima libero impedit architecto vero a.
        </CardDescription> */}
      </Card>
    </>
  );
};

export default CategoryCard;
