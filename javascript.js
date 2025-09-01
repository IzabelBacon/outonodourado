        const label = document.createElement('label');
        label.textContent = itemInfo.label;
        itemDiv.appendChild(label);

        // Tooltip opcional (se quiser mostrar descrição ao passar o mouse)
        itemDiv.title = itemInfo.description;

        inventoryBar.appendChild(itemDiv);
    // Event listeners
    puzzleSubmit.addEventListener('click', submitPuzzle);
    puzzleClose.addEventListener('click', closePuzzle);

    helpBtn.addEventListener('click', () => {
      showInfo("Controls: Click hotspots to explore. H = Help, I = Inventory toggle, R = Restart.");
    });

    inventoryBtn.addEventListener('click', () => {
      inventoryVisible = !inventoryVisible;
      inventoryBar.classList.toggle('hidden', !inventoryVisible);
    });

    restartBtn.addEventListener('click', () => {
      currentSceneId = 'shore';
      inventory = [];
      Object.values(puzzles).forEach(p => p.solved = false);
      renderScene(currentSceneId);
      showInfo("Game restarted.");
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'h') {
        helpBtn.click();
      } else if (e.key.toLowerCase() === 'i') {
        inventoryBtn.click();
      } else if (e.key.toLowerCase() === 'r') {
        restartBtn.click();
      }
    });

    // Inicialização
    renderScene(currentSceneId);
