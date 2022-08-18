import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

function Category({ category, reLoad, setReload }) {
  const [dishes, setDishes] = useState("");

  const Input = styled("input")({
    display: "none",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api(`/dishes?groupBy=category&id=${category.id}`, {
          method: "GET",
        });
        setDishes(res.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, [category.id]);

  const handleDel = () => {
    async function fetchData() {
      try {
        await api(`/categories/${category.id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        setReload(reLoad + 1);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  };
  const handlePhoto = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.set("image", event.target.files[0], "image.png");
    try {
      const res = await api(`/categories/${category.id}/upload`, {
        method: "POST",
        body: formdata,
      });
      setReload(reLoad + 1);
    } catch (error) {
      alert(error.message);
    }
  };

  if (!dishes)
    return (
      <>
        ...
        <br />
      </>
    );

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box>
          <img
            src={"https://api.shashlandia.ru" + category.image}
            width="45"
            height="45"
          />
        </Box>

        <Box sx={{ flexGrow: 1, ml: 1 }}>
          {category.name}:{dishes.length}
        </Box>
        <Box>
          <label htmlFor={category.id}>
            <Input
              onChange={handlePhoto}
              accept="image/*"
              id={category.id}
              type="file"
            />
            <IconButton aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <IconButton onClick={handleDel} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
export default Category;
