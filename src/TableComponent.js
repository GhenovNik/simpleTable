import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from './actions';
import './TableComponent.css';

export const TableComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    useEffect(() => {
        fetch("https://mocki.io/v1/42092d16-8ed1-4987-8f69-a4d5f05fb331")
            .then((response) => response.json())
            .then((fetchedData) => {
                dispatch(setData(fetchedData));
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [dispatch]);

    return (
        <table className="table">
            <thead>
            <tr>
                <th>userID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    <td>{row.userId}</td>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.body}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
