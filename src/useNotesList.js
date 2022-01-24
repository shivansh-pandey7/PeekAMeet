import { useEffect, useState } from "react";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNextData } from "./redux/notesActions";
import { hasMore } from "./redux/reducer";

const useNotesList = (pageNumber) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const hasMor = useSelector(hasMore);

    useEffect(() => {
        setLoading(true);
        dispatch(getNextData(pageNumber))
        setLoading(false);
    }, [pageNumber]);
    

  return {
      loading, hasMor
  };
};

export default useNotesList;
