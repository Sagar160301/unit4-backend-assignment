

const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body)
        return res.status(200).send(item)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}


const del = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id, { new: true }).lean().exec()
        return res.status(201).send(item)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}
module.exports = (model) => {
    return {
        post: post,

        del: del
    }
}