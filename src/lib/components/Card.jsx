import React from 'react';
import {
    Card
} from "../../components/ui/card";

const BizCard = ({ children }) => {
    return (
        <Card className="w-full max-w-sm p-3 transition-all duration-300 hover:shadow-lg">
            {children}
        </Card>
    );
};

export default BizCard;
