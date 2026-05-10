from pathlib import Path

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
from torchvision import datasets, transforms, models

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

DATASET_PATH = Path("dataset/Collated")

BATCH_SIZE = 16
IMAGE_SIZE = 224
EPOCHS = 5
LEARNING_RATE = 0.001

transform = transforms.Compose([
    transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
    transforms.ToTensor(),
])

dataset = datasets.ImageFolder(
    root=DATASET_PATH,
    transform=transform,
)

class_names = dataset.classes

train_loader = DataLoader(
    dataset,
    batch_size=BATCH_SIZE,
    shuffle=True,
)

model = models.resnet18(weights=None)

model.fc = nn.Linear(
    model.fc.in_features,
    len(class_names),
)

model = model.to(DEVICE)

criterion = nn.CrossEntropyLoss()

optimizer = optim.Adam(
    model.parameters(),
    lr=LEARNING_RATE,
)

print("Classes:", class_names)
print("Training started...\n")

for epoch in range(EPOCHS):
    running_loss = 0.0

    for images, labels in train_loader:
        images = images.to(DEVICE)
        labels = labels.to(DEVICE)

        optimizer.zero_grad()

        outputs = model(images)

        loss = criterion(outputs, labels)

        loss.backward()

        optimizer.step()

        running_loss += loss.item()

    epoch_loss = running_loss / len(train_loader)

    print(f"Epoch [{epoch + 1}/{EPOCHS}] Loss: {epoch_loss:.4f}")

torch.save(model.state_dict(), "fsl_model.pth")

print("\nTraining finished 😭🔥")
print("Model saved as fsl_model.pth")