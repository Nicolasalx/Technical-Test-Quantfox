"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

type ListItem = {
  id: string;
  name: string;
};

export default function Board() {
  const [lists, setLists] = useState<ListItem[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/lists").then((res) => setLists(res.data));
  }, []);

  const addList = async () => {
    const newList = { name: `Nouvelle liste` };
    const res = await axios.post("http://localhost:8080/lists", newList);
    setLists([...lists, res.data]);
  };

  const deleteList = (id: string) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <div className="bg-white min-h-screen p-6 text-black">
      <div className="flex gap-4 overflow-x-auto">
        {lists.map((list) => (
          <List
            key={list.id}
            id={list.id}
            name={list.name}
            onDelete={deleteList}
          />
        ))}
        <button
          onClick={addList}
          className="p-4 bg-blue-500 text-white rounded-lg border-2 border-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
        >
          + Add a list
        </button>
      </div>
    </div>
  );
}
