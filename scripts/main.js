Events.on(ContentInitEvent, e => { 
    // Enable v7 functionality
    Planets.serpulo.campaignRules.legacyLaunchPads = true;

    // Add tech node after advanced launch pad
    var parent = TechTree.all.find(u => u.content == Blocks.advancedLaunchPad); 
    var content = Blocks.launchPad;
    var cost = ItemStack.empty;  
    var node = new TechTree.TechNode(parent, content, cost); 
});

/*
Events.on(WorldLoadEndEvent, e => {
    Planets.serpulo.campaignRules.legacyLaunchPads = Vars.state.isCampaign();
}); 
*/
