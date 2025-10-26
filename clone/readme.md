    <ul class="library">
            <span class="material-symbols-outlined">graphic_eq</span>
            <li><a href="#">music</a></li>
        </ul>

     <ul class="library">
            <span class="material-symbols-outlined">sports_basketball</span>
        <li><a href="#">sports</a></li>
        </ul>

        <ul class="library">
            <span class="material-symbols-outlined">sports_esports</span>
            <li><a href="#">gaming</a></li>
        </ul>
        <ul class="library">
            <span class="material-symbols-outlined">movie</span>
            <li><a href="#">films</a></li>
        </ul>
        <ul class="library">
            <span class="material-symbols-outlined">tv</span>
            <li><a href="#">tv shows</a></li>
        </ul>
        <ul class="library">
            <span class="material-symbols-outlined">newsmode</span>
            <li><a href="#">news</a></li>
        </ul>
        <ul class="library">
            <span class="material-symbols-outlined">sensors</span>
            <li><a href="#">live</a></li>
        </ul>









.library-link{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
}
.library-link h1{
    font-size: 20px;
    color: var(--almost-black);
    margin-bottom: 15px;
}
.library{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.library li span {
    margin-right: 10px;
    position: relative;
    align-items: center;
    vertical-align: middle;
}
.library li a{
    color: var(--medium-gray);
    font-size: 15px;
    text-transform: capitalize;
}