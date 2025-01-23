import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const SpecialCard = ({ title = "", description = "", image = "" }) => {
  return (
    <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      {/* <CardFooter className="flex justify-between items-center">
                <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </CardFooter> */}
    </Card>
  );
};

export default SpecialCard;
