<?php
$host = getenv('IP');
$username = 'root';
$password = '1234';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$sanitize_country=  filter_var(htmlspecialchars($_GET['country']),FILTER_SANITIZE_STRING);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '$sanitize_country'");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

?>
<table class="result">
    <tr>
    <th>Country's Name</th>
    <th>Continent</th>
    <th>Independence Year</th>
    <th>Head of State</th>
    </tr>
<?php foreach ($results as $row): ?>
   <tr>
        <td><?= $row['name']; ?></td>
        <td><?= $row['continent'];?></td>
        <td><?= $row['independence_year'];?></td>
        <td><?=$row['head_of_state'];?></td>
    </tr>
    <caption>Table that shows names of the countries continent, year of independence and the head of state.</caption>
<?php endforeach; ?>
</table>


