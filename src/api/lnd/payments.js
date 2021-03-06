import sockets from '../../sockets'

export default ({ lnd }) => (
	(req, res) => (
		lnd.listPayments({}, (err, data) => {
			if (err) return res.status(500).send(err)
			
			return res.json({ data })
		})
	)
)