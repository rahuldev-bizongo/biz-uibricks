import React from 'react';
import {
    Card
} from "../../components/ui/card";

<style jsx>{`
    .biz-card {
        width: 100%;
        max-width: 24rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
        background-color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                    0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: all 0.3s ease;
    }

    .biz-card:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                    0 4px 6px -2px rgba(0, 0, 0, 0.05);
        transform: translateY(-5px);
    }
`}</style>

const BizCard = ({ children }) => {
    return (
        <Card className="w-full max-w-sm p-3 transition-all duration-300 hover:shadow-lg">
            {children}
        </Card>
        // <div className="biz-card">
        //     {children}
        // </div>
    );
};

export default BizCard;
