import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";

export function PostForm() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    motivo: "",
    description: "",
    image: "",
    stock: "",
    precio: "",
    medidas: "",
    codigo: "",
  });
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost({
          motivo: post.motivo,
          description: post.description,
          codigo: post.codigo,
          precio: post.precio,
          stock: post.stock,
          medidas: post.medidas,
        });
      }
    })();
  }, [params.id, getPost]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Go Back
          </Link>
        </header>
        <Formik
          initialValues={post}
          enableReinitialize
          validationSchema={Yup.object({
            motivo: Yup.string().required("motivo is Required"),
            description: Yup.string().required("Description is Required"),
            // image: Yup.mixed().required("The image required"),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            actions.resetForm();
            actions.setSubmitting(false);
            navigate("/");
          }}
        >
          {({ setFieldValue, isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
         
                     {/* stock */}
                     <label
                htmlFor="stock"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                stock
              </label>
              <Field
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                placeholder="Post stock"
                name="stock"
                type="number"
                required
                // autoFocus
              />
                 <label
                htmlFor="medidas"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                medidas
              </label>
              <Field
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                placeholder="Post medidas"
                name="medidas"
                required
                // autoFocus
              />
              {/* medidas */}
              <label
                htmlFor="codigo"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                codigo
              </label>
              <Field
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                placeholder="Post codigo"
                name="codigo"
                type="number"
                required
                // autoFocus
              />
              {/* descripcion */}
              <label
                htmlFor="description"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                Description
              </label>
              <Field
                component="textarea"
                name="description"
                id="description"
                placeholder="Write a description"
                rows="3"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />
              {/* precio */}
              <label
                htmlFor="precio"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                precio
              </label>
              <Field
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                placeholder="Post precio"
                name="precio"
                type="number"
                required
                // autoFocus
              />
            {/* codigo */}
         
              {/* motivo */}
              <label
                htmlFor="motivo"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                motivo
              </label>
              <Field
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                placeholder="Post motivo"
                name="motivo"
                // autoFocus
              />
              <ErrorMessage
                component="p"
                name="motivo"
                className="text-red-400 text-sm"
              />

              <ErrorMessage
                component="p"
                name="description"
                className="text-red-400 text-sm"
              />

              <label
                htmlFor="image"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />
              <ErrorMessage
                component="p"
                name="image"
                className="text-red-400 text-sm"
              />

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                ) : (
                  "save"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
