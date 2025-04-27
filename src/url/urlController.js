import { error, success } from "../config/response.js"

const createShortLink = async (req, res) => {
    const link = req.body.link
    const userId = req.user.id
    getUserShortlinkHelper(userId)
        .then(async userShortLink => {
            createShortLinkHelper(link, userId)
                .then(async shortLink => {
                    res.status(201).json(
                        success(
                            "Shortlink created successfully",
                            {},
                            res.statusCode
                        )
                    )
                })
                .catch(err => {
                    res.status(err?.code || 500).json(
                        error(
                            "Error creating shortlink",
                            {
                                error: err?.message || "Internal server error"
                            }

                        )
                    )
                })
        })
        .catch(err => {
            res.status(err?.code || 500).json(
                error(
                    "Error getting user shortlink",
                    {
                        error: err?.message || "Internal server error"
                    }
                )
            )
        })
}


const getAllShortLinks = async (req, res) => {
    const userId = req.user.id
    getAllShortLinksHelper(userId)
        .then(async links => {
            res.status(200).json(
                success(
                    "Shortlinks retrieved successfully",
                    {
                        data: links
                    },
                    res.statusCode
                )
            )
        })
}

const getOneShortLink = async (req, res) => {
    const userId = req.user.id
    const shortLinkId = req.params.link
    getOneShortLinkHelper(userId, shortLinkId)
        .then(async link => {
            res.status(200).json(
                success(
                    "Shortlink retrieved successfully",
                    {
                        data: link
                    },
                    res.statusCode
                )
            )
        })
        .catch(err => {
            res.status(err?.code || 500).json(
                error(
                    "Error retrieving shortlink",
                    {
                        error: err?.message || "Internal server error"
                    }
                )
            )
        })
}

const redirectShortLink = async (req, res) => {}

const getOneShortLinkStats = async (req, res) => {
    const userId = req.user.id
    const link = req.params.link
    getOneShortLinkStatsHelper(userId, link)
        .then(async stats => {
            res.status(200).json(
                success(
                    "Shortlink stats retrieved successfully",
                    {
                        data: stats
                    },
                    res.statusCode
                )
            )
        })
        .catch(err => {
            res.status(err?.code || 500).json(
                error(
                    "Error retrieving shortlink stats",
                    {
                        error: err?.message || "Internal server error"
                    }
                )
            )
        })
}

const deleteShortLink = async (req, res) => {
    const userId = req.user.id
    const link = req.params.link
    deleteShortLinkHelper(userId, link)
        .then(async () => {
            res.status(200).json(
                success(
                    "Shortlink deleted successfully",
                    {},
                    res.statusCode
                )
            )
        })
        .catch(err => {
            res.status(err?.code || 500).json(
                error(
                    "Error deleting shortlink",
                    {
                        error: err?.message || "Internal server error"
                    }
                )
            )
        })
}

const editShortLink = async (req, res) => {
    const newShortLink = req.body.shortLink
    const userId = req.user.id
    editShortLinkHelper(userId, newShortLink)
        .then(async resp => {
            res.status(200).json(
                success(
                    "Shortlink updated successfully",
                    {
                        data: resp
                    },
                    res.statusCode
                )
            )
        })
        .catch(err => {
            res.status(err?.code || 500).json(
                error(
                    "Error updating shortlink",
                    {
                        error: err?.message || "Internal server error"
                    }
                )
            )
        })
} 

const setLinkApps = async (req, res) => {}

export {
    createShortLink,
    getAllShortLinks,
    getOneShortLink,
    redirectShortLink,
    getOneShortLinkStats,
    deleteShortLink,
    editShortLink,
    setLinkApps
}