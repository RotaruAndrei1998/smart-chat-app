export const getColor = (messageType: string): string => {
    if (messageType === "high") {
        return "red";
    }

    if (messageType === "medium") {
        return "yellow";
    }

    return "black";
};

export const getAmmount = (messageType: string): string => {
    if (messageType === "high") {
        return "0.001";
    }

    if (messageType === "medium") {
        return "0.0005";
    }

    return "0.0001";
};

export const getMessageInt = (messageType: string): number => {
    if (messageType === "high") {
        return 2;
    }

    if (messageType === "medium") {
        return 1;
    }

    return 0;
};