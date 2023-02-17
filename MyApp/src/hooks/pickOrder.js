import React from 'react';

export const pickOrder = () => {
    const [orderedList, setOrderedList] = React.useState([]);
    const [orderedDict, setOrderedDict] = React.useState({ list: {} });
    function dictToList() {
        const list = [];
        for (const key in orderedDict) {
            if (orderedDict.hasOwnProperty(key) && orderedDict[key])
                list.push(key);
        }
        return list;
    }
    function show() {
        return {
            OrderedDict: JSON.stringify(orderedDict),
            OrderedList: JSON.stringify(orderedList),
        };
    }
    return {
        orderedList,
        orderedDict,
        setOrderedList,
        setOrderedDict,
        dictToList,
    };
};
