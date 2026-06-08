// src/components/ui/Card.jsx
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CustomCard = ({
  headerContent,     // JSX or text (optional)
  children,          // CardBody content
  footerContent,     // JSX or text (optional)
  image,             // Optional image URL
  title,             // Optional title text
  description,
  descriptionClassName="",       // Optional description text
  className = "",    // Additional Tailwind/MT classes
  bodyClassName = "",
  headerClassName = "",
  footerClassName = "",

}) => {
  return (
    <Card className={`w-full h-full flex flex-col justify-between bg-white hover:shadow-xl ${className}`}>
      {headerContent || image ? (
        <CardHeader floated={false} className={`h-100 ${headerClassName}`}>
          {image && (
            <img src={image} alt={title || "Card image"} className="w-full h-full object-cover rounded-lg" />
          )}
          {headerContent}
        </CardHeader>
      ) : null}

      <CardBody className={`flex-grow ${bodyClassName}`}>
        {title && (
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="small" color="gray" className={`font-normal ${descriptionClassName}`}>
            {description}
          </Typography>
        )}
        {children}
      </CardBody>

      {footerContent && (
        <CardFooter className={`pt-0 ${footerClassName}`}>
          {footerContent}
        </CardFooter>
      )}
    </Card>
  );
};

export default CustomCard;
