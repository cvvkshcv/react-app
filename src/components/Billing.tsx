import { useEffect } from "react";
import { useUser } from "../store/useUser";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddressWithoutGeo } from "../store/useUser.types";
import Spinner from "../shared/Spinner";

const Billing = ({ handleContinue }) => {
  const {
    fetchUserDetail,
    setUserInfo,
    isSubmitSuccess,
    isSubmitting,
    loading,
    userInfo,
    error,
  } = useUser((store) => ({
    fetchUserDetail: store.fetchUserDetail,
    setUserInfo: store.setUserInfo,
    loading: store.loading,
    error: store.error,
    userInfo: store.userInfo,
    isSubmitting: store.isSubmitting,
    isSubmitSuccess: store.isSubmitSuccess,
  }));

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm<AddressWithoutGeo>();

  useEffect(() => {
    if (loading) {
      fetchUserDetail(1);
    }
  }, [loading, fetchUserDetail]);

  useEffect(() => {
    if (Object.keys(userInfo).length > 0 && userInfo && !loading) {
      const {
        address: { number, city, zipcode, street },
      } = userInfo;
      reset({ number, city, zipcode, street });
    }
  }, [reset, userInfo, loading]);

  // Error handler
  if (error) {
    return (
      <div className="mx-24 my-6 p-4 bg-red-300 rounded text-center">
        Cannot load user info. Please try again later
      </div>
    );
  }

  // Event handlers
  const onSubmit: SubmitHandler<AddressWithoutGeo> = (data) => {
    setUserInfo(data);
    handleContinue?.();
  };

  // Renderes
  const renderLoadingUser = () => {
    return <h1>Loading...</h1>;
  };

  const renderUserInfo = () => {
    return (
      <>
        <h3 className="text-xl font-bold">Billing</h3>
        <div className="w-full mt-4">
          <form className="bg-slate-100 shadow rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                disabled
                placeholder="Username"
                value={userInfo.username}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="text"
                disabled
                placeholder="email@gmail.com"
                value={userInfo.email}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Phone"
                type="text"
                disabled
                placeholder="+91 89076600000"
                value={userInfo.phone}
              />
            </div>
          </form>
        </div>
      </>
    );
  };

  const renderShippingInfo = () => {
    return (
      <>
        <h3 className="text-xl font-bold">Shipping address</h3>
        <div className="w-full mt-4">
          <form
            className="shadow rounded px-8 pt-6 pb-8 mb-4 bg-slate-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4 lg:flex gap-4">
              <div className="flex-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="house_number"
                >
                  House number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="house_number"
                  type="text"
                  placeholder="Ex: 123"
                  {...register("number", {
                    required: "House number is required",
                  })}
                />
                <p className="text-red-500">
                  {errors?.number && errors?.number?.message}
                </p>
              </div>
              <div className="flex-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="street_name"
                >
                  Street name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="street_name"
                  type="text"
                  placeholder="Ex: Old road"
                  {...register("street", {
                    required: "Street is required",
                  })}
                />
                <p className="text-red-500">
                  {errors?.street && errors?.street?.message}
                </p>
              </div>
            </div>

            <div className="mb-4 lg:flex gap-4">
              <div className="flex-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="house_number"
                >
                  City
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="house_number"
                  type="text"
                  placeholder="Ex: Bangalore"
                  {...register("city", {
                    required: "City is required",
                  })}
                />
                <p className="text-red-500">
                  {errors?.city && errors?.city?.message}
                </p>
              </div>
              <div className="flex-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="street_name"
                >
                  Zip code
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="street_name"
                  type="text"
                  placeholder="Ex: 500001"
                  {...register("zipcode", {
                    required: "Zipcode is required",
                  })}
                />
                <p className="text-red-500">
                  {errors?.zipcode && errors?.zipcode?.message}
                </p>
              </div>
            </div>
            <button className="p-2 bg-blue-500 text-white rounded shadow flex items-center">
              {isSubmitting && <Spinner className="ml-1" />}
              Save
            </button>
            <pre>{isSubmitting && JSON.stringify(getValues(), null, 2)}</pre>

            {!isSubmitting && !isSubmitSuccess && (
              <>
                <div className="mx-24 my-6 p-4 bg-red-300 rounded text-center">
                  Error while updating billing address
                </div>
              </>
            )}
          </form>
        </div>
      </>
    );
  };

  // JSX
  return (
    <div className="lg:mx-24 sm:mx-12 xs:mx-3 mt-5">
      {loading && renderLoadingUser()}
      {!loading && (
        <>
          {renderUserInfo()}
          {renderShippingInfo()}
        </>
      )}
    </div>
  );
};

export default Billing;
