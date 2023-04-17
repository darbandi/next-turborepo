import { NextApiRequest, NextApiResponse } from 'next';
import Profile from '../models/Profile';

// Get all profiles
export const getAllProfiles = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const {
      page = 1,
      perPage = 10,
      profileName = '',
      email = '',
    } = req.query || {};
    const filters = {
      ...(profileName ? { profileName: { $regex: profileName } } : {}),
      ...(email ? { email: { $regex: email } } : {}),
    };
    const profiles = await Profile.find(filters)
      .skip((+page - 1) * +perPage)
      .limit(+perPage);
    const totalCount = await Profile.countDocuments(filters);
    res.status(200).json({
      success: true,
      data: profiles,
      meta: {
        totalCount,
        page,
        perPage,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// Create a new profile
export const createProfile = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json({ success: true, data: profile.toJSON() });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// Get a single profile by ID
export const getProfileById = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const profile = await Profile.findById(req.query.id).populate('user');
    res.status(200).json({ success: true, data: profile.toJSON() });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// Update a profile
export const updateProfile = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!profile) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: profile.toJSON() });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// Delete a profile
export const deleteProfile = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const deletedProfile = await Profile.findByIdAndRemove(req.query.id);
    if (!deletedProfile) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
