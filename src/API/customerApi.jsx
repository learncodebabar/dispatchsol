import API from "./axiosConfig";

// Fetch all customers
export const fetchCustomers = async () => {
  try {
    const response = await API.get("/customers");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch a single customer by ID
export const fetchCustomerById = async (id) => {
  try {
    const response = await API.get(`/customers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add a new customer
export const addCustomer = async (customerData) => {
  try {
    const response = await API.post("/customers", customerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update a customer by ID
export const updateCustomer = async (id, updatedData) => {
  try {
    const response = await API.put(`/customers/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a customer by ID
export const deleteCustomer = async (id) => {
  try {
    const response = await API.delete(`/customers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
