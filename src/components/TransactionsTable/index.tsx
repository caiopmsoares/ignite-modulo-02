import { Container } from './styles';

export function TransactionsTable() {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Desenvolvimento de website</td>
						<td className="deposit">R$ 21314</td>
						<td>ASOIOIAS</td>
						<td>21/21/212</td>
					</tr>
					<tr>
						<td>Desenvolvimento de website</td>
						<td className="withdraw">R$ -21314</td>
						<td>ASOIOIAS</td>
						<td>21/21/212</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
