Events.on(ContentInitEvent, e => { 
    Planets.serpulo.campaignRules.legacyLaunchPads = true;
    var parent = TechTree.all.find(u => u.content == Blocks.advancedLaunchPad); 
    var content = Blocks.launchPad;
    var cost = Blocks.conveyor.requirements;  
    new TechTree.TechNode(parent, content, cost);
});
