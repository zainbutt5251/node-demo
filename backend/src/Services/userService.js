const { UserModal } = require("../model");
const { ServiceHandler } = require("../_utils/handler");
 
const GET = async(req) => {
  
   
};

const UpdateUser = async (req) => {
  const { email } = req.query;

  try {
    const UserModal = await UserModal.findOneAndUpdate(
      { email: decodeURIComponent(email) },
      { $inc: { calendar_res: 1 } },
      { new: true }
    );

    if (UserModal) {
      return {
        success: true,
        message: "User updated successfully",
        data: UserModal,
      };
    } else {
      return {
        success: false,
        message: "User not found or not updated",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error updating user",
      error: error.message, // Include the error message for debugging
    };
  }
};

module.exports = {
  GET: (req, res) => ServiceHandler(GET, req, res),
  UpdateUser: (req, res) => ServiceHandler(UpdateUser, req, res),
};